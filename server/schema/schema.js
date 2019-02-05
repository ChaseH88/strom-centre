// STROM CENTRE GRAPHQL IMPLEMENTATION
// Required
const graphql = require("graphql");
const graphqlDate = require("graphql-iso-date");
//const _ = require("lodash");

// Get Mongoose Schemas
const User = require("../models/user");
const Team = require("../models/team");
const Setting = require("../models/settings");
const Project = require("../models/projects");
const Comment = require("../models/comments");
const History = require("../models/history");

//deconstructs the variables from graphql
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = graphql;

// deconstructs the variables from graphql-iso-date
const {
    GraphQLDate,
    GraphQLTime,
    GraphQLDateTime
} = graphqlDate;


// ##############################################################################
// GRAPH QL SCHEMAS
// ##############################################################################


// USER ---start------
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
         id: {type: GraphQLID},
         email: {type: GraphQLString},
         firstName: {type: GraphQLString},
         lastName: {type: GraphQLString},
         password: {type: GraphQLString},
         funFacts: {type: GraphQLString},
         quote: {type: GraphQLString},
         team: {
             type: TeamType,
             resolve(parent, args){
                return Team.findById(parent.team);
             }
         },
         skills: {type: GraphQLString},
         bio: {type: GraphQLString},
         birthday: {type: GraphQLDateTime}
    })
});
// USER ---end------

// TEAM ---start------
const TeamType = new GraphQLObjectType({
    name: "Team",
    fields: () => ({
         id: {type: GraphQLID},
         name: {type: GraphQLString},
         teamLead: {
             type: UserType,
             resolve(parent, args){
                return User.findById(parent.teamLead);
             }
         },
         isActive: {type: GraphQLBoolean},
         message: {type: GraphQLString},
         tagline: {type: GraphQLString}
    })
});
// TEAM ---end------

// SETTINGS ---start------
const SettingsType = new GraphQLObjectType({
    name: "Settings",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        author: {
            type: UserType,
            resolve(parent, args){
                console.log(parent)
               return User.findById(parent.author);
            }
        },
        team: {
             type: TeamType,
             resolve(parent, args){
                return Team.findById(parent.team);
             }
        }
    })
});
// SETTINGS ---end------

// PROJECTS ---start------
const ProjectType= new GraphQLObjectType({
    name: "Projects",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        isComplete: {type: GraphQLBoolean},
        isPrivate: {type: GraphQLBoolean},
        owners: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                // Pass the array allowing all users to come back
                return User.find({_id:{$in: parent.owners} });
            }
        },
        author: {
            type: UserType,
            resolve(parent, args){
                console.log(parent)
               return User.findById(parent.author);
            }
        },
        deadline: {type: GraphQLDateTime},
        delivery: {type: GraphQLDateTime},
    })
});
// PROJECTS ---end------

// COMMENTS ---start------
const CommentType= new GraphQLObjectType({
    name: "Comment",
    fields: () => ({
        id: {type: GraphQLID},
        parentItem: {type: GraphQLID},
        text: {type: GraphQLString},
        owner: {type: GraphQLID}
        //time
    })
});
// COMMENTS ---end------

// HISTORY ---start------
const HistoryType= new GraphQLObjectType({
    name: "History",
    fields: () => ({
        id: {type: GraphQLID},
        parentItem: {type: GraphQLID},
        date: {type: new GraphQLList(GraphQLDateTime)},
        historyData: {type: new GraphQLList(GraphQLString)},
        user: {type: new GraphQLList(GraphQLID)}
    })
});
// HISTORY ---end------


// ##############################################################################
// ROOT QUERIES
// ##############################################################################


// Root Query
// args will allow the id to be passed into the query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // FIND ONE USER
        user: {
            type: UserType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                return User.findById(args.id);
            }
        },
        // ALL USERS QUERY
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find({});
            }
        },
        // FIND ONE TEAM
        team: {
            type: TeamType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                return Team.findById(args.id);
            }
        },
        // ALL TEAMS
        teams: {
            type: new GraphQLList(TeamType),
            resolve(parent, args){
                return Team.find({});
            }
        },
        // FIND ONE SETTING
        setting: {
            type: SettingsType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                return Setting.findById(args.id);
            }
        },
        // FIND ALL SETTINGS
        settings: {
            type: new GraphQLList(SettingsType),
            resolve(parent, args){
                return Setting.find({});
            }
        },
        // FIND ONE PROJECT
        project: {
            type: ProjectType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                return Project.findById(args.id);
            }
        },
        // FIND ALL PROJECTS
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args){
                return Project.find({});
            }
        },
        // FIND ONE COMMENT
        comment: {
            type: CommentType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                return Comment.findById(args.id);
            }
        },
        // FIND ALL COMMENTS
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent, args){
                return Comment.find({});
            }
        },
        // FIND ONE HISTORY ITEM
        history: {
            type: HistoryType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                return History.findById(args.id);
            }
        },
        // FIND ALL HISTORY
        allHistory: {
            type: new GraphQLList(HistoryType),
            resolve(parent, args){
                return History.find({});
            }
        },
    }
})



// ##############################################################################
// MUTATIONS
// ##############################################################################


// Allows GraphQL to change correct data
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // ADDS A NEW USER
        addUser: {
            type: UserType,
            args: {
                email: {type: new GraphQLNonNull(GraphQLString)},
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)},
                funFacts: {type: GraphQLString},
                quote: {type: GraphQLString},
                team: {type: new GraphQLNonNull(GraphQLID)},
                birthday: {type: GraphQLDateTime},
                skills: {type: GraphQLString},
                bio: {type: GraphQLString}
                // will add more later
            },
            resolve(parent, args){
                let user = new User({
                    email: args.email,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    password: args.password,
                    funFacts: args.funFacts,
                    quote: args.quote,
                    team: args.team,
                    birthday: args.birthday,
                    skills: args.skills,
                    bio: args.bio
                });
                return user.save();
            }
        },

        // ADDS A NEW TEAM
        addTeam: {
            type: TeamType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                isActive: {type: new GraphQLNonNull(GraphQLBoolean)},
                message: {type: new GraphQLNonNull(GraphQLString)},
                tagline: {type: new GraphQLNonNull(GraphQLString)},
                teamLead: {type: GraphQLID}
            },
            resolve(parent, args){
                let team = new Team({
                    name: args.name,
                    isActive: args.isActive,
                    message: args.message,
                    tagline: args.tagline,
                    teamLead: args.teamLead
                });
                return team.save();
            }
        },

        // ADD NEW SETTING
        addSetting: {
            type: SettingsType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                active: {type: new GraphQLNonNull(GraphQLBoolean)},
                author: {type: new GraphQLNonNull(GraphQLID)},
                team: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let setting = new Settings({
                    name: args.name,
                    active: args.active,
                    author: args.author,
                    team: args.team
                });
                return setting.save();
            }
        },

        // ADD PROJECT
        addProject: {
            type: ProjectType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
                status: {type: new GraphQLNonNull(GraphQLString)},
                isComplete: {type: new GraphQLNonNull(GraphQLBoolean)},
                isPrivate: {type: new GraphQLNonNull(GraphQLBoolean)},
                owners: {type: new GraphQLList(GraphQLID)},
                author: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let project = new Project({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    isComplete: args.isComplete,
                    isPrivate: args.isPrivate,
                    owners: args.owners,
                    author: args.author,
                    team: args.team
                });
                return project.save();
            }
        },

        // ADDS A COMMENT
        addComment: {
            type: CommentType,
            args: {
                parentItem: {type: new GraphQLNonNull(GraphQLID)},
                text: {type: new GraphQLNonNull(GraphQLString)},
                owner: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let comment = new Comment({
                    parentItem: args.parentItem,
                    text: args.text,
                    owner: args.owner
                });
                return comment.save();
            }
        },

        // Adds History
        addHistory: {
            type: HistoryType,
            args: {
                parentItem: {type: new GraphQLNonNull(GraphQLID)},
                date: {type: new GraphQLList(GraphQLDateTime)},
                historyData: {type: new GraphQLList(GraphQLString)},
                user: {type: new GraphQLList(GraphQLID)}
            },
            resolve(parent, args){
                let history = new History({
                    name: args.name,
                    parentItem: args.parentItem,
                    date: args.date,
                    historyData: args.historyData,
                    user: args.user
                });
                return history.save();
            }
        },
    }
})

// Calls the default query
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})