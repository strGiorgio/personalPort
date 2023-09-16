from typing import Any, Dict
from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)

        context['title'] = 'Making great things!'
        context['user'] = 'Giorgio'

        return context


class WelcomeScreen(TemplateView):
    template_name = 'welcome-screen.html'

    def get_context_data(self, **kwargs):
        context = super(WelcomeScreen, self).get_context_data(**kwargs)

        context['title'] = 'Welcome!'
        
        return context

