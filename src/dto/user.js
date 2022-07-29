class UserDTO {
    fillable = ['fullName', 'email', 'password', 'bio', 'avatar', 'phoneNumber', 'facebook', 'role', 'slug', 'createdAt', 'updatedAt', '_id']

    constructor(user){
        this.obj = user
    }
    
    toSimple(fields) {
        const filterValid = fields.filter(field => {
            return this.fillable.includes(field)
        })
        let user = {}
        const userObj = this.obj
        console.log(Object.entries(userObj))
        for (const [key, value] of Object.entries(this.obj)) {
            if( filterValid.includes(key) ) user[key] = value
        }
        return user
    }
}

module.exports = {
    UserDTO
}