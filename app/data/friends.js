// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a 'dummy' customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      // 30
      friendName: 'Chad',
      friendphoto: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
      scores: ['1', '2', '3', '4', '5', '5', '4', '3', '2', '1']
    },
    {
      // 34
      friendName: 'Brad',
      friendphoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_pv91-qkShdopw7gQLFrProVqQ_nUITkfiA&usqp=CAU',
      scores: ['2', '2', '5', '4', '5', '5', '1', '3', '4', '3']
    },
    {
      // 10
      friendName: 'Chelsea',
      friendphoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQO4nmn3QYxvDjhCAQmbN43JvsV3tMc_gNCGQ&usqp=CAU',
      scores: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
    },
    {
      // 23
      friendName: 'Ahmed',
      friendphoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc9cJES58lGhBI1Nl-UeCzkGCF4TdBZU9leg&usqp=CAU',
      scores: ['2', '2', '2', '2', '2', '2', '5', '3', '2', '1']
    },
    {
      // 28
      friendName: 'Candice',
      friendphoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW5_9cA-8LuJpuFe2DiHT2UpdkUdnnVyAK_Q&usqp=CAU',
      scores: ['1', '5', '3', '4', '3', '3', '1', '3', '2', '3']
    },
    {
      // 38
      friendName: 'Abraham',
      friendphoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAO8aETizUy52JGirP7qbert5woSPuVOrOLw&usqp=CAU',
      scores: ['4', '4', '3', '4', '5', '5', '4', '3', '2', '4']
    },
    {
      // 39
      friendName: 'Adam',
      friendphoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiapBXJomvTGItYf10VD_-IH2OAekviHJBXQ&usqp=CAU',
      scores: ['5', '2', '3', '4', '5', '5', '5', '3', '2', '5']
    },
    {
      // 35
      friendName: 'Keen',
      friendphoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6Q5szds171HOrD6krqPpUJCKF5BGi2YDN7Q&usqp=CAU',
      scores: ['2', '3', '3', '4', '5', '5', '4', '3', '3', '3']
    },
    {
      // 43
      friendName: 'Penelope',
      friendphoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR2x-mUL8TjEDF3u8ZSqlg0BDsaKEdrVWg6g&usqp=CAU',
      scores: ['4', '4', '5', '4', '5', '5', '4', '3', '5', '5']
    }
];
  
  // Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;