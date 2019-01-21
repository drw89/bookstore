export const sampleCart = {
    "id": 1,
    "date": "2018-08-01T00:00:00.000+0000",
    "amount": 115.2,
    "status": "ACCEPTED",
    "customer": {
      "id": 1,
      "firstName": "Alice",
      "lastName": "Smith",
      "email": "alice@example.org"
    },
    "address": {
      "street": "123 Maple Street",
      "city": "Mill Valley",
      "stateProvince": "CA",
      "postalCode": "90952",
      "country": "US"
    },
    "creditCard": {
      "type": "MASTERCARD",
      "number": "5400000000000005",
      "expirationMonth": 1,
      "expirationYear": 2020
    },
    "items": [
      {
        "book": {
          "id": 1,
          "isbn": "3960883897",
          "title": "Spring Boot 2",
          "authors": "Michael Simons",
          "price": 36
        },
        "quantity": 2,
        "price": 34.2
      },
      {
        "book": {
          "id": 2,
          "isbn": "1484214315",
          "title": "Pro Spring Boot",
          "authors": "Felipe Gutierrez",
          "price": 45
        },
        "quantity": 1,
        "price": 40.5
      }
    ]
  }