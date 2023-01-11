const fs = require('fs');

class DealWithJson {
    static readFromJson = () => {
        let data
        try {
            data = JSON.parse(fs.readFileSync('Model/books.json'))
        } catch (error) {
            data = []
        }
        return data
    }


    static writeToJson = (data) => fs.writeFileSync('Model/books.json', JSON.stringify(data));

}



module.exports = DealWithJson