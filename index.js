var address_book = [
  {
    name: 'Sakti',
    address: 'Bandung',
    noHp: '01234'
  },
  {
    name: 'Bara',
    address: 'Bandung',
    noHp: '14045'
  },
  {
    name: 'Fajrin',
    address: 'Wamena'
  }
];

function add_address_book(name, address, noHp) {
  address_book.push({
    name,
    address,
    noHp
  });
}

function delete_Address_book(name) {
  let someuser = address_book.filter(
    item => item.name.toLowerCase() !== name.toLowerCase()
  );
  address_book = someuser;
  return address_book;
}
