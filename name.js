class name {
    constructor(){}

    getCount(){
        var nameCountRef = database.ref('nameCount');
        nameCountRef.on("value",function(data){
            nameCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            nameCount : count
        });
    }

update(name){
    var nameIndex = "name" + nameCount;
    database.ref(nameIndex).set({
        name: name
    });
}
}