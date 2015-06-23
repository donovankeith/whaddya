if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    activities: [
      { title: "See a show at UCB." },
      { title: "Go to dinner at that cool bar in WeHo you walked past." },
      { title: "Attend a random meetup." }
    ]
  });
}