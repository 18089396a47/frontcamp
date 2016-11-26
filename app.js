document.getElementById('show-news').addEventListener('click', () => {
    require.ensure([], require => require('./index'));
});
