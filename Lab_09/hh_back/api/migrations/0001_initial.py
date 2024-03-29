# Generated by Django 4.0 on 2023-04-07 17:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=150, unique=True, verbose_name='Наименование')),
                ('description', models.TextField(verbose_name='Описание')),
                ('city', models.CharField(max_length=50)),
                ('address', models.TextField(verbose_name='Адресс')),
            ],
            options={
                'verbose_name': 'Компания',
                'verbose_name_plural': 'Компании',
                'ordering': ('-id',),
            },
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Имя вакансии')),
                ('description', models.TextField(verbose_name='Описание вакансии')),
                ('salary', models.FloatField(verbose_name='Заработная плата')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='vacancies', to='api.company', verbose_name='Компания')),
            ],
            options={
                'verbose_name': 'Вакансия',
                'verbose_name_plural': 'Вакансии',
                'ordering': ('-id',),
            },
        ),
    ]
