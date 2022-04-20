const skills = [
    {id: 1, skill: 'JavaScript', status: true},
    {id: 2, skill: 'Express', status: false},
    {id: 3, skill: 'HTML / CSS', status: true}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}
function getOne(id){
    id = parseInt(id);
    return skills.find(skill=> skill.id === id);
}