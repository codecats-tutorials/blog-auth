from alone.models import Counter
from alone.rest.serializers import CounterSerializer
from rest_framework import generics, viewsets, permissions

class CounterViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Counter.objects.all()
    serializer_class = CounterSerializer