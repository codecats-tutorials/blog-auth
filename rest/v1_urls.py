from django.conf.urls import url, include
from alone.rest.views.custom import Counter
from alone.rest.views.counter import CounterViewSet
from rest_framework import routers
from rest_framework.authtoken import views

router = routers.SimpleRouter()
router.register(r'counter', CounterViewSet)
router.urls

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-token-auth/', views.obtain_auth_token),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
