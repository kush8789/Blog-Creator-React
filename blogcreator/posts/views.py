from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import PostListSerializer, PostCreateSerializer
from .models import Post
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.paginator import Paginator
from django.db.models import Q

# Create your views here.


class PostView(generics.ListAPIView):
    # queryset = Post.objects.all()
    serializer_class = PostListSerializer

    def get_queryset(self):
        posts = Post.objects.all()

        # Ordering
        order_by_param = self.request.query_params.get("order_by", None)
        if order_by_param == "name":
            posts = posts.order_by("title")
        elif order_by_param == "date":
            posts = posts.order_by("-pub_date")
        elif order_by_param == "vote":
            posts = posts.order_by("-votes")

        # Searching
        search_param = self.request.query_params.get("search", None)
        if search_param:
            posts = posts.filter(
                Q(title__icontains=search_param) | Q(text__icontains=search_param)
            )

        return posts


class PostCreateView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    # parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        try:
            # Set the author to the current user making the request
            request.data["author"] = request.user.id

            serializer = PostCreateSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(
                    {"message": "Post created successfully."},
                    status=status.HTTP_201_CREATED,
                )
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class PostHome(APIView):
    def home(request):
        posts = Post.objects.all()
        search_term = ""
        try:
            if "name" in request.GET:
                posts = posts.order_by("title")

            if "date" in request.GET:
                posts = posts.order_by("pub_date")

            if "vote" in request.GET:
                posts = posts.order_by("-votes")

            if "search" in request.GET:
                search_term = request.GET["search"]
                posts = posts.filter(text__icontains=search_term)
        except:
            pass
        paginator = Paginator(posts, 6)
        page = request.GET.get("page")
        posts_paginated = paginator.get_page(page)

        serializer = PostCreateSerializer(posts_paginated, many=True)
        return JsonResponse(
            {
                "results": serializer.data,
                "num_pages": paginator.num_pages,
                "page": posts_paginated.number,
            }
        )

    pass


class createpost(APIView):
    pass


class upvote:
    pass


class downvote:
    pass


class userposts:
    pass


class post:
    pass
