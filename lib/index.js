export function getAuth(firebase, token, loadAuth) {
  firebase.database().ref('/advertisers/' + token).once('value')
  .then(snap => {
    const val = snap.val()
    if(!val){
      alert('Something went wrong with your login. Please Logout and login again')
    }
    loadAuth({
      id: token,
      email: val.email,
      password: val.password,
      name: val.name,
      address: val.address,
      btw: val.btw
    })
  })
}

export function getCustomer(firebase, id, loadCustomer) {
  let query = firebase.database().ref('customers/' + id)
  query.once('value').then(snap => {
    let data = snap.val()
    data.id = id
    loadCustomer(data)
  })
}

export function getCustomers(firebase, id, loadCustomers) {
  let query = firebase.database().ref('advertisers/' + id + '/customers')
  query.once('value').then(snap => {
    let data = snap.val()
    let customers = []
    let customer = {}
    for (let key in data) {
      customer = {
        id: key,
        category: data[key].categoryName,
        name: data[key].name,
        mainImageURL: data[key].mainImageURL
      }
      customers.push(customer)
    }
    loadCustomers(customers)
  })
}
