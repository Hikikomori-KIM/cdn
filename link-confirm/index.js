$(function(){
    $(".link-confirm").click(function(e){
        //data-commnet가 있으면 해당 값을 우선적용,없으면 기본메세지 출력
        var commnet = $(this).data("comment")||"정말 이동하시겠습니까?";
       var choice = window.confirm("정말 이동하시겠습니까?");
    });
});
