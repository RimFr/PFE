from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

# Page d'accueil (index.html) - première page du site
def home_index(request):
    return render(request, 'core/index.html')

# Redirection après login selon le rôle
@login_required
def dashboard_redirect(request):
    user = request.user
    if user.role == 'manager':
        return redirect('core:manager_dashboard')
    elif user.role == 'secretary':
        return redirect('core:secretary_dashboard')
    elif user.role == 'teacher':
        return redirect('core:teacher_dashboard')
    elif user.role == 'student':
        if hasattr(user, 'student_profile') and user.student_profile.is_minor:
            return redirect('core:student_minor_dashboard')
        return redirect('core:student_dashboard')
    return redirect('core:home')

# Dashboards
@login_required
def manager_dashboard(request):
    return render(request, 'core/manager/dashboard.html')

@login_required
def secretary_dashboard(request):
    return render(request, 'core/secretary/index.html')

@login_required
def teacher_dashboard(request):
    return render(request, 'core/teacher/index.html')

@login_required
def student_dashboard(request):
    return render(request, 'core/student/dashboard.html')

@login_required
def student_minor_dashboard(request):
    return render(request, 'core/student_minor/dashboard.html')