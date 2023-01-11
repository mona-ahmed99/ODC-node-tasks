class User {
    static addUser = (req, res) => {
        res.render("addUser.hbs")
    }

    static showAllUsers = (req, res) => {
        res.render('showAllUsers.hbs')
    }

    static showSingleUser = (req, res) => {
        res.render('showSingleUser.hbs')
    }


    static editUser = (req, res) => {
        res.render('editUser.hbs');
    }

}



module.exports = User;