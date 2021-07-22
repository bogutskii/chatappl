const initialState = {
userList: ['Admin', 'Guest', 'Moder', 'kakoiToVasya'],
  channels: ['generals', 'private'],
  messages: [{user: 'Admin', time: '12:45', textmsg: 'Hello and Wellcome!!!', url: 'www.avatar.com/ava.jpg'},
    {user: 'Vasya', time: '12:47', textmsg: 'hi Admin!!!', url: 'www.avatar.com/ava2.jpg'}]

};

const storeFn = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default storeFn;
