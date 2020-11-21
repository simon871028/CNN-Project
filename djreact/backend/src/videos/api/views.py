from videos.models import Video
from .serializers import  VideoSerializer
from rest_framework import viewsets

class VideoViewSet(viewsets.ModelViewSet):
    
    serializer_class = VideoSerializer
    queryset = Video.objects.all()

#from rest_framework.generics import (ListAPIView, 
#RetrieveAPIView, 
#CreateAPIView, 
#DestroyAPIView, 
#UpdateAPIView )
#
#class VideoListView(ListAPIView):
#    queryset = Video.objects.all()
#    serializer_class = VideoSerializer
#
#class VideoDetailView(RetrieveAPIView):
#    queryset = Video.objects.all()
#    serializer_class = VideoSerializer
#
#class VideoCreateView(CreateAPIView):
#    queryset = Video.objects.all()
#    serializer_class = VideoSerializer
#
#class VideoUpdateView(UpdateAPIView):
#    queryset = Video.objects.all()
#    serializer_class = VideoSerializer
#
#class VideoDeleteView(DestroyAPIView):
#    queryset = Video.objects.all()
#    serializer_class = VideoSerializer

