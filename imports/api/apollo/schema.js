import '/imports/api/';
import _ from 'lodash';
import {
  graphQLTypes,
  graphQLInputTypes,
  graphQLMutations,
} from '/imports/lib/wireMethods';

import {
  graphQLQueries,
} from '/imports/lib/wireSubscriptions';

// compose types from auto-wired collections
let types = '';

_.forEach(graphQLTypes, type => {
  types += `${type}\n\n`;
});

// compose input types from auto-wired methods
let inputTypes = '';

_.forEach(graphQLInputTypes, inputType => {
  inputTypes += `${inputType}\n\n`;
});

// compose queries
let queries = '';

_.forEach(graphQLQueries, query => {
  queries += `\t${query}\n`;
});

// compose mutations from auto-wired methods
let mutations = '';

_.forEach(graphQLMutations, mutation => {
  mutations += `\t${mutation}\n`;
});

export const typeDefs = `

scalar JSON

${types}

${inputTypes}

type Query {
  ping: String
  ${queries}
}

type Mutation {
  ${mutations}
}

type Email {
  address: String
  verified: Boolean
}

type UserProfile {
  name: String
}

type User {
  _id: String
  emails: [Email]
  profile: UserProfile
}
`;

// console.log('typeDefs', typeDefs);
