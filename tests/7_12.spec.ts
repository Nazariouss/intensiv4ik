import { test, expect } from '@playwright/test'
import { resourceUsage } from 'process'

test("api test 1", async ({ request }) => {
    let result = await request.get('https://reqres.in/api/users/2')
    let data = await result.json()
    
    expect(data).toEqual(expect.objectContaining({
        "data": {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }))
})

test("api test 2", async ({ request }) => {
    let result = await request.get('https://reqres.in/api/users?page=2')
    let data = await result.json()

    expect(result.ok()).toBeTruthy()
    // console.log(result.status())
    expect(data['total']).toEqual(12)
})

test("api test 3", async ({ request }) => {
    let result = await request.post('https://reqres.in/api/users?page=2', {
        data : {
            "name": "morpheus",
            "job": "leader"
        }
    })
    expect(result.status()).toEqual(201)
})

test("api test 4", async ({ request }) => {
    let result = await request.put('https://reqres.in/api/users/2', {
        data : {
            "name": "morpheus",
            "job": "zion resident"
        }
    })
    let new_data = await result.json()
    expect(new_data).toEqual(expect.objectContaining({
        "name": "morpheus",
        "job": "zion resident",
    }))
})

test("api test 5", async ({ request }) => {
    let result = await request.delete('https://reqres.in/api/users/2')
    expect(result.status()).toEqual(204)
})