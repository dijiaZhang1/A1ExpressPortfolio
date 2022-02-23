exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' });
}

exports.about = function(req, res, next) {
    res.render('about', { title: 'About' });
}

exports.services = function(req, res, next) {
    res.render('services', { title: 'Services' });
}

exports.contact_me = function(req, res, next) {
    res.render('contact_me', { title: 'Contact_me' });
}
