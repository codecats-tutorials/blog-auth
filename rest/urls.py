from django.conf.urls import url, include

urlpatterns = [
    url(r'^v1/', include('rest.v1_urls', namespace='v1'), name='v1')
]