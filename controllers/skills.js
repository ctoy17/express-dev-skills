const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update
};

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}
function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}
function newSkill(req, res){
    res.render('skills/new');
}
function create (req,res){
    Skill.create(req.body);
    res.redirect('/skills');
}
function deleteSkill (req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}
function update (req, res){
    res.redirect('/skills/<%= skill.id %>/update');
    res.render('skills/show',{
    skill: Skill.updateOne(req.params.id),
    });
}