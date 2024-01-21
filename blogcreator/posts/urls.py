from django.urls import path
from . import views
app_name="posts"

urlpatterns = [
    path("post/", views.PostView.as_view(), name="post-list"),
    path("newpost/", views.PostCreateView.as_view(), name="new_post"),
    # path("posthome/", views.PostHome.as_view(), name="post-home")
]
