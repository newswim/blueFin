Router.route('/', {
    name: '/',
    action: function () {
        this.render('Home')
    }
});

Router.route('/all', {
    name: '/all',
    action: function () {
        this.render('AllTheData')
    }
});
