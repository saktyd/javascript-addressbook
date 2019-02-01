var id = 3;
var address_book = [
  {
    id: 1,
    name: 'Sakti',
    address: 'Bandung',
    noHp: '01234'
  },
  {
    id: 2,
    name: 'Bara',
    address: 'Bandung',
    noHp: '14045'
  },
  {
    id: 3,
    name: 'Fajrin',
    address: 'Wamena',
    noHp: '14045'
  }
];

function add_address_book(name, address, noHp) {
  id = id + 1;
  address_book.push({
    id,
    name,
    address,
    noHp
  });
}

function delete_Address_book(noID) {
  let someuser = address_book.filter(item => item.id !== noID);
  address_book = someuser;
  displayAddressBook();
}

function displayAddressBook() {
  address_book.forEach(addres => {
    const contacs = `ID: ${addres.id} , ${addres.name} , ${addres.address} (${
      addres.noHp
    })`;
    console.log(contacs);
  });
}
