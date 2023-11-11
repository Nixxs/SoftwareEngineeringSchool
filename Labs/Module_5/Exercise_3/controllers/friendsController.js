const friends = require('../models/friends')

exports.info = (req, res) => {
    console.log(req.headers)

    const userInfo = {
        'user-agent': req.headers['user-agent'],
        'content-type': req.headers['content-type'],
        'accept': req.headers['accept']
    };

    // Modify this response to just return info on the user-agent, content-type and accept headers
    res.send(userInfo);
};

exports.getByID = (req, res) => {
    console.log(req.params)
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

    let matchingFriends = [...friends];
    matchingFriends = matchingFriends.filter(friend => friend.id == friendId);
    
    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({error: `No friends matching gender: ${filterGender}`})
    } 
};

exports.filter = (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter

    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name[0].toLowerCase() == filterLetter.toLowerCase());
    }
    
    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        if(filterGender){
            res.status(404).json({error: `No friends matching gender: ${filterGender}`})
        }
        if(filterLetter){
            res.status(404).json({error: `No friends matching letter: ${filterLetter}`})
        }
    }  
};

exports.putFriend = (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    console.log(friendId);
    console.log(updatedFriend);

    // Replace the old friend data for friendId with the new data from updatedFriend
    oldfriend = friends.find(friend => friend.id == friendId);

    // Modify this response with the updated friend, or a 404 if not found
    if (oldfriend){
        updatedFriend = {...oldfriend, ...updatedFriend}
        friends[friends.indexOf(oldfriend)] = updatedFriend;

        res.status(200).json({result: `Updated friend with ID: ${updatedFriend.id}, ${updatedFriend.name}, ${updatedFriend.gender}`})
    } else {
        res.status(404).json({error: `No friends matching id: ${friendId}`})
    }
}

exports.postFriend = (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).send(newFriend)
} 

exports.getAllFriends = (req, res) => {
    res.json(friends)
}