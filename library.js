//hover時の画像切替
$(function() {
	$('.img_hover').hover(inFunc,outFunc);
});
function inFunc() {
	$(this).attr('src',$(this).attr('src').replace('.jpg','_on.jpg'));
	$(this).attr('src',$(this).attr('src').replace('.png','_on.png'));
	$(this).attr('src',$(this).attr('src').replace('.gif','_on.gif'));
};
function outFunc() {
	$(this).attr('src',$(this).attr('src').replace('_on.jpg','.jpg'));
	$(this).attr('src',$(this).attr('src').replace('_on.png','.png'));
	$(this).attr('src',$(this).attr('src').replace('_on.gif','.gif'));
};