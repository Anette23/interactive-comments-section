# Dokumentácia API pre komentáre

Toto je dokumentácia k REST API, ktoré slúži na správu komentárov v aplikácii. API umožňuje vytváranie, čítanie, aktualizáciu a mazanie komentárov.

## Základná URL

http://localhost:5000/comments

## Endpointy

### 1. Získanie všetkých komentárov

- **Metóda:** `GET`
- **URL:** `/comments`
- **Popis:** Tento endpoint vracia všetky komentáre.

**Príklad odpovede:**

````json
[
  {
    "id": 1,
    "user": { "username": "user1" },
    "content": "Toto je prvý komentár.",
    "createdAt": "Just now",
    "score": 0,
    "replies": []
  },
  {
    "id": 2,
    "user": { "username": "user2" },
    "content": "Toto je druhý komentár.",
    "createdAt": "Just now",
    "score": 0,
    "replies": []
  }
]


2. Pridanie nového komentára
Metóda: POST
URL: /comments
Popis: Tento endpoint umožňuje pridať nový komentár.
Zahŕňa:

Headers:

Content-Type: application/json
Body

{
  "user": { "username": "newUser" },
  "content": "Toto je nový komentár."
}


{
  "id": 3,
  "user": { "username": "newUser" },
  "content": "Toto je nový komentár.",
  "createdAt": "Just now",
  "score": 0,
  "replies": []
}


Tu je upravená dokumentácia API, ktorá obsahuje tvoje údaje a detaily:

markdown
Kopírovať kód
# Dokumentácia API pre komentáre

Toto je dokumentácia k REST API, ktoré slúži na správu komentárov v aplikácii. API umožňuje vytváranie, čítanie, aktualizáciu a mazanie komentárov.

## Základná URL
http://localhost:5000/comments

bash
Kopírovať kód

## Endpointy

### 1. Získanie všetkých komentárov

- **Metóda:** `GET`
- **URL:** `/comments`
- **Popis:** Tento endpoint vracia všetky komentáre.

**Príklad odpovede:**
```json
[
  {
    "id": 1,
    "user": { "username": "user1" },
    "content": "Toto je prvý komentár.",
    "createdAt": "Just now",
    "score": 0,
    "replies": []
  },
  {
    "id": 2,
    "user": { "username": "user2" },
    "content": "Toto je druhý komentár.",
    "createdAt": "Just now",
    "score": 0,
    "replies": []
  }
]
2. Pridanie nového komentára
Metóda: POST
URL: /comments
Popis: Tento endpoint umožňuje pridať nový komentár.
Zahŕňa:

Headers:

Content-Type: application/json
Body:

json
Kopírovať kód
{
  "user": { "username": "newUser" },
  "content": "Toto je nový komentár."
}
Príklad odpovede:

json
Kopírovať kód
{
  "id": 3,
  "user": { "username": "newUser" },
  "content": "Toto je nový komentár.",
  "createdAt": "Just now",
  "score": 0,
  "replies": []
}
3. Aktualizácia existujúceho komentára
Metóda: PUT
URL: /comments/:id
Popis: Tento endpoint umožňuje aktualizovať komentár podľa jeho ID.
Zahŕňa:

Headers:

Content-Type: application/json
Body:

json
Kopírovať kód
{
  "content": "Aktualizovaný komentár."
}

{
  "id": 1,
  "user": { "username": "user1" },
  "content": "Aktualizovaný komentár.",
  "createdAt": "Just now",
  "score": 0,
  "replies": []
}


4. Mazanie komentára
Metóda: DELETE
URL: /comments/:id
Popis: Tento endpoint umožňuje mazať komentár podľa jeho ID.
Príklad odpovede:

Status: 204 No Content
Chybové hlášky
404 Not Found: Komentár s daným ID neexistuje.
400 Bad Request: Zle formátované údaje v požiadavke.
Poznámky
API používa JSON na komunikáciu.
Na zabezpečenie správneho fungovania API sa odporúča používať cors pre umožnenie prístupu z iných domén.
````
