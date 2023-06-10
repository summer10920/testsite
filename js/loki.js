/************animate Header Background */
const
  list = [
    ['HTML5', 5],
    ['CSS', 4],
    ['Sass', 7],
    ['Scss', 7],
    ['Stylus', 9],
    ['MediaQuery', 3],
    ['RWD', 10],
    ['Canvas', 5],
    ['Bootstrap', 5],
    ['Javascript', 11],
    ['DOM/BOM', 9],
    ['ES6', 9],
    ['Typescript', 7],
    ['Node.js', 9],
    ['webpack', 7],
    ['Express.js', 3],
    ['jQuery', 4],
    ['RESTful', 4],
    ['ajax', 4],
    ['fetch', 3],
    ['Postman', 3],
    ['CROS', 9],
    ['Chart.js', 4],
    ['formGroup', 6],
    ['Angular', 10],
    ['Rxjs', 6],
    ['Ngrx', 6],
    ['Vue', 10],
    ['React', 10],
    ['Redux', 10],
    ['React Native', 10],
    ['GIT', 6],
    ['gitHub', 3],
    ['Adobe XD', 3],
    ['Photoshop', 5],
    ['illustrator', 5],
    ['inDesign', 6],
    ['Premiere', 5],
    ['After Effect', 6],
    ['Hexo', 9],
    ['PHP', 10],
    ['Laravel', 6],
    ['MySQL', 9],
    ['MongoDB', 15],
    ['Wordpress', 3],
    ['Joomla', 6],
    ['SEO', 6],
    ['Loki', 15],
    ['Jiang', 12],
    ['CCNA', 5],
    ['DataTables.js', 5],
    ['Type', 5],
    ['JSON/parse', 9],
    ['transform', 8],
    ['SVG', 6],
    ['setTimeOut', 3],
    ['setInterval', 6],
    ['formData', 9],
  ],
  lokiKeyword = WordCloud(document.getElementById('lokiBanner'), {
    list: list,
    minFontSize: 10,
    backgroundColor: '#666',
    color: function (word, weight) {
      return weight > 9 ? '#E9106166' :
        ['#0006', '#1116', '#2226', '#3336', '#4446', '#5556'][Math.floor(Math.random() * 6)];
    },
    rotateRatio: 0.5,
    rotationSteps: 2,
    gridSize: 20,
    weightFactor: 5,
    drawOutOfBound: false,
    shrinkToFit: true,
    wait: 50
  });