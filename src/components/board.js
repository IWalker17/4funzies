export default function board() {
  const table = document.createElement('table');

  // create table rows
  const firstRow = document.createElement('tr');
  const secondRow = document.createElement('tr');
  const thirdRow = document.createElement('tr');
  
  // create table cells grouped by rows
  const firstRowFirstCell = document.createElement('td');
  const firstRowSecondCell = document.createElement('td');
  const firstRowThirdCell = document.createElement('td');
  firstRowSecondCell.classList = 'left-right-border';
  
  const secondRowFirstCell = document.createElement('td');
  const secondRowSecondCell = document.createElement('td');
  const secondRowThirdCell = document.createElement('td');
  secondRowFirstCell.classList = 'top-bottom-border';
  secondRowSecondCell.classList = 'center-border';
  secondRowThirdCell.classList = 'top-bottom-border';
  
  const thirdRowFirstCell = document.createElement('td');
  const thirdRowSecondCell = document.createElement('td');
  const thirdRowThirdCell = document.createElement('td');
  thirdRowSecondCell.classList = 'left-right-border';
  
  // append cells to their rows
  firstRow.appendChild(firstRowFirstCell);
  firstRow.appendChild(firstRowSecondCell);
  firstRow.appendChild(firstRowThirdCell);
  
  secondRow.appendChild(secondRowFirstCell);
  secondRow.appendChild(secondRowSecondCell);
  secondRow.appendChild(secondRowThirdCell);
  
  thirdRow.appendChild(thirdRowFirstCell);
  thirdRow.appendChild(thirdRowSecondCell);
  thirdRow.appendChild(thirdRowThirdCell);

  // append rows to the table
  table.appendChild(firstRow);
  table.appendChild(secondRow);
  table.appendChild(thirdRow);

  return table;
}