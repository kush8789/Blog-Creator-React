from rest_framework import serializers
from .models import Post, Vote
from django.contrib.auth.models import User


class PostListSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="author.username", read_only=True)
    author = serializers.CharField(source="author.username", read_only=True)

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "url",
            "description",
            "image",
            "username",
            "pub_date",
            "author",
            "votes",
        ]
        extra_kwargs = {
            "pub_date": {
                "read_only": True,
            },
            "author": {
                "read_only": True,
            },
            "votes": {
                "read_only": True,
            },
        }

    # def create(self, validated_data):
    #     try:
    #         user = self.context['request'].user

    #         return Post.objects.create(user=user, **validated_data)
    #     except Exception as e:
    #         raise serializers.ValidationError(str(e))


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'url', 'description', 'image', 'pub_date', 'author', 'votes']
