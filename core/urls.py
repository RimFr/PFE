from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = 'core'

urlpatterns = [
    # Page d'accueil (index.html)
    path('', views.home_index, name='home'),

    # Login
    path('login/', auth_views.LoginView.as_view(
        template_name='registration/login.html',
        redirect_authenticated_user=False
    ), name='login'),

    # Après connexion
    path('dashboard/', views.dashboard_redirect, name='dashboard_redirect'),

    # Les différents dashboards
    path('manager/', views.manager_dashboard, name='manager_dashboard'),
    path('secretary/', views.secretary_dashboard, name='secretary_dashboard'),
    path('teacher/', views.teacher_dashboard, name='teacher_dashboard'),
    path('student/', views.student_dashboard, name='student_dashboard'),
    path('student/minor/', views.student_minor_dashboard, name='student_minor_dashboard'),

    # Logout
    path('logout/', auth_views.LogoutView.as_view(next_page='core:home'), name='logout'),
]