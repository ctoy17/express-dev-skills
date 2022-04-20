const skills = [
    {id: 105463, skill: 'JavaScript', status: true},
    {id: 254752, skill: 'Express', status: false},
    {id: 345846, skill: 'HTML / CSS', status: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}
function getOne(id){
    id = parseInt(id);
    return skills.find(skill=> skill.id === id);
}
function create(skill){
    skill.id = Date.now() % 1000000;
    skill.status = false;
    skills.push(skill);
}
function deleteOne(id){
    const idx = skills.findIndex(skill=>skill.id===parseInt(id));
    skills.splice(idx, 1);
}