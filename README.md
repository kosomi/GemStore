깃 사용 설명서: http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners

# git 사용 설명서 #

1. 첫번째 www.github.com 에 가서 repository를 만든다.
2. 올릴 폴더에 들어간다.
3. git init 을 설정한다. 
4. vim README.md 를 만든 후 대략적인 내용을 기입한다.
5. git add . 으로 업로드할 파일을 선택한다.
6. git status 로 올리파일 목록을 확인한다.
7. git commit -m "first" 메시지를 커밋한다.
8. git remote add origin https://github.com/kosomi/test.git
9. git push -u origin master

하면 업로드 끝!

주의사항: 
1. 뭔가 잘 안되면 .gitint 폴더를 모두 지워서 다시 처음부터 시작한다.


# git 업로드 #

1. git push -u original master
2. git push -u original
3. git pull (vm editor 에다 이상한거 씀)
4. git add .
5. git status
6. git push -u origin master


# git 업데이트 #

1. git add *
2. git commit -m 'second'
3. git push origin master
