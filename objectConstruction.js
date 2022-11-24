//creating a variable as an object
var obj = {
   username: 'aurelio',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

//outputs the fullname in properties section
console.log(obj.prop.getFullname());

//outputs the username field
console.log(obj.username);
