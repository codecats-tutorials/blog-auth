from rest_framework import serializers
from alone.models import Counter

class CounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counter
        fields = '__all__'