
from videos.api.views import VideoViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', VideoViewSet, basename='videos')
urlpatterns = router.urls


#from django.urls import path, include
#from .views import (
#    VideoListView, 
#    VideoDetailView,
#    VideoCreateView,
#    VideoDeleteView,
#    VideoUpdateView
#    )
#
#
#urlpatterns =[
#    path('', VideoListView.as_view()),
#    path('create/', VideoCreateView.as_view()),
#    path('<pk>', VideoDetailView.as_view()),
#    path('<pk>/update/', VideoUpdateView.as_view()),
#    path('<pk>/delete/', VideoDeleteView.as_view())
#]
