function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
  return "<h4>"+n+"</h4><table>"+
    "<tr><td>Criminal Sanction?</td><td>"+(d.criminal)+"</td></tr>"+
    "<tr><td>School Sanction?</td><td>"+(d.school)+"</td></tr>"+
    "<tr><td>School Policy?</td><td>"+(d.policy)+"</td></tr>"+
    "<tr><td>Off-campus?</td><td>"+(d.campus)+"</td></tr>"+
    "</table>";
}

criminalArr = [
  "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES",
  "NO", "NO", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES",
  "YES", "NO", "YES", "YES", "YES", "/", "YES", "YES", "YES", "YES", "YES",
  "YES", "NO", "YES", "YES", "YES", "NO", "YES", "YES", "YES", "YES", "NO",
  "YES", "YES", "YES", "YES", "YES", "YES", "YES"
];

schoolArr = [
  "YES", "YES", "YES", "YES", "YES", "NO", "YES", "YES", "YES", "YES", "YES",
  "YES", "NO", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES",
  "NO", "YES", "NO", "YES", "YES", "DC", "YES", "YES", "YES", "NO", "YES",
  "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES",
  "YES", "YES", "YES", "YES", "YES", "YES", "YES"
];

policyArr = [
  "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES",
  "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES",
  "YES", "YES", "YES", "YES", "YES", "/", "YES", "YES", "YES", "YES", "YES",
  "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES",
  "YES", "YES", "YES", "YES", "YES", "YES", "YES"
];

campusArr =[
  "NO", "NO", "YES", "NO", "Proposed", "NO", "NO", "YES", "NO", "YES", "YES",
  "NO", "YES", "YES", "YES", "YES", "YES", "NO", "NO", "NO", "NO", "NO",
  "YES", "NO", "NO", "NO", "NO", "/", "YES", "YES", "NO", "NO", "NO",
  "NO", "NO", "NO", "NO", "YES", "Proposed", "NO", "NO", "NO", "YES", "YES",
  "NO", "NO", "YES", "NO", "NO", "YES", "NO"
];

var sampleData ={};	/* Sample random data. */
["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
  "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
  "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
  "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
  "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
  .forEach(function(d, index){
    var criminal = criminalArr[index],
      school = schoolArr[index],
      policy = policyArr[index],
      campus = campusArr[index],
      count = 0;
    if(criminal==='YES'){
      count++;
    }
    if(school==='YES'){
      count++;
    }
    if(policy==='YES'){
      count++;
    }
    if(campus==='YES'){
      count++;
    }
    avg = count;
    sampleData[d]={criminal:criminal, school:school,policy:policy,
      campus:campus,avg:avg, color:d3.interpolate("#ffffcc", "#800026")(avg/5)};
  });

/* draw states on id #statesvg */

uStates.draw("#statesvg", sampleData, tooltipHtml);
