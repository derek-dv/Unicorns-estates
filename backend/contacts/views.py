from django.core.mail import send_mail
from rest_framework import permissions
from .serializers import ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact


class ContactCreateView(APIView):
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, format=None):
        data = self.request.data

        try:
            send_mail(data['subject'], 'Name: ' + data['name'] + '\nEmail: ' +
                      data['email'] + '\n\n' + data['message'], fail_silently=False)
            contact = Contact(name=data["name"], email=data["email"],
                              subject=data["subject"], message=data["message"])
            contact.save()
            return Response({"success": "message sent successfully"})

        except:
            return Response({"error": "message not sent"})
