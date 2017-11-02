from rest_framework.views import View, APIView
from rest_framework.response import Response


class Counter(APIView):

	def get(self, request, format=None):
		return Response({'counter': -1})

	def post(self, request):
		import time
		time.sleep(1)

		return Response({'counter': request.data.get('counter')})

