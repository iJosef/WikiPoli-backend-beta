if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../js/sw.js').then(() => {
            console.log('Service Worker Registered')
        })
    })
}

/*$('a.like').on('click', function(event) {
    event.preventDefault();
    postId = event.target.parentNode.parentNode.dataset['postid'];
    var isLike = event.target.previousElementSibling == null;
    $.ajax({
        method: 'POST',
        url: urlLike,
        data: { isLike: isLike, postId: postId, _token: token }
    })

    .done(function() {
        /*event.target.innerText = isLike ? event.target.innerText == 'Like' ? 'You like this post' : 'Like' : event.target.innerText == 'Dislike' ? 'You don\'t like this post : '
        Dislike ';
        if (isLike) {
            event.target.nextElementSibling.innerText = 'Dislike';
        } else {
            event.target.previousElementSibling.innerText = 'Like';
        }*
    });
});*/