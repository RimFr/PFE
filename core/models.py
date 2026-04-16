from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

# ====================== CUSTOM USER ======================
class User(AbstractUser):
    ROLE_CHOICES = (
        ('manager', 'Manager'),
        ('secretary', 'Secretary'),
        ('teacher', 'Teacher'),
        ('student', 'Student'),
        ('parent', 'Parent'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    profile_photo = models.ImageField(upload_to='profiles/', blank=True, null=True)

    def __str__(self):
        return f"{self.get_full_name()} - {self.role}"


class Language(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=5)

    def __str__(self):
        return self.name


class Room(models.Model):
    number = models.CharField(max_length=10)
    capacity = models.IntegerField(default=25)

    def __str__(self):
        return f"Room {self.number}"


class Group(models.Model):
    name = models.CharField(max_length=100)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    level = models.CharField(max_length=10)
    teacher = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='taught_groups')
    room = models.ForeignKey(Room, on_delete=models.SET_NULL, null=True)
    max_students = models.IntegerField(default=25)
    schedule = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.language} {self.level}"


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True, related_name='students')
    enrollment_date = models.DateField(auto_now_add=True)
    is_minor = models.BooleanField(default=True)
    parent = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='children')

    def __str__(self):
        return self.user.get_full_name()


class Attendance(models.Model):
    STATUS_CHOICES = (('P', 'Present'), ('A', 'Absent'), ('L', 'Late'))
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='P')
    note = models.TextField(blank=True, null=True)
    marked_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='marked_attendances')

    class Meta:
        unique_together = ('student', 'group', 'date')

    def __str__(self):
        return f"{self.student} - {self.date} - {self.status}"


class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='grades')
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    score = models.DecimalField(max_digits=5, decimal_places=2)
    max_score = models.DecimalField(max_digits=5, decimal_places=2, default=20.00)
    date = models.DateField(auto_now_add=True)
    comment = models.TextField(blank=True, null=True)
    entered_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.student} - {self.title} ({self.score}/{self.max_score})"


class Payment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    month = models.CharField(max_length=30)
    paid_date = models.DateField(null=True, blank=True)
    method = models.CharField(max_length=20, choices=[('cash', 'Cash'), ('bank', 'Bank Transfer'), ('other', 'Other')])
    status = models.CharField(max_length=20, choices=[('paid', 'Paid'), ('pending', 'Pending'), ('overdue', 'Overdue')], default='pending')
    receipt_number = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.student} - {self.amount} DA - {self.month} ({self.status})"


class Announcement(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    target = models.CharField(max_length=20, choices=[('all', 'All'), ('students', 'Students'), ('teachers', 'Teachers'), ('specific', 'Specific Group')])
    group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.title


class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    subject = models.CharField(max_length=150)
    content = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"From {self.sender} to {self.receiver}"


class Material(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='materials/')
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='materials')
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class SchoolSetting(models.Model):
    school_name = models.CharField(max_length=100, default="Lumina School")
    languages = models.CharField(max_length=200, default="French, English, Italian, German")
    rooms_count = models.IntegerField(default=8)

    def __str__(self):
        return "School Settings"