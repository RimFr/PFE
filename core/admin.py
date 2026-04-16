from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import (
    User, Language, Room, Group, Student, Attendance,
    Grade, Payment, Announcement, Message, Material, SchoolSetting
)

# ====================== CUSTOM USER ADMIN ======================
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'role', 'first_name', 'last_name', 'is_staff')
    list_filter = ('role', 'is_staff', 'is_superuser')
    fieldsets = UserAdmin.fieldsets + (
        ('Role & School Info', {'fields': ('role', 'phone', 'address', 'date_of_birth', 'profile_photo')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Role', {'fields': ('role',)}),
    )

admin.site.register(User, CustomUserAdmin)

# ====================== OTHER MODELS ======================
admin.site.register(Language)
admin.site.register(Room)
admin.site.register(Group)
admin.site.register(Student)
admin.site.register(Attendance)
admin.site.register(Grade)
admin.site.register(Payment)
admin.site.register(Announcement)
admin.site.register(Message)
admin.site.register(Material)
admin.site.register(SchoolSetting)