# Generated by Django 3.1.5 on 2021-01-30 14:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='bathroom',
        ),
    ]
