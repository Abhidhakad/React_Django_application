from django.shortcuts import render
from .serializers import StudentSerializer
from .models import Student
from rest_framework.generics import CreateAPIView
# from django.views.decorators.csrf import csrf_exempt
# from django.http import JsonResponse
# import json

# @csrf_exempt
# def save_student(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         student = Student(stuname=data['stuname'], rollNo=data['rollNo'], stuemail=data['stuemail'])
#         Student.save()
#         return JsonResponse({'message': 'Student saved successfully'})
#     else:
#         return JsonResponse({'message': 'Invalid request method'})


# Create your views here.
from rest_framework.generics import ListAPIView

class StudentList(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class DataCreateView(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    