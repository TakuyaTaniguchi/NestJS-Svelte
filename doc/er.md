```mermaid
---
title: User
---
erDiagram
    USER {
        index id PK
        string name
        string avatar
        string description
        string email
        string password_digest
        datetime created_at
        datetime updated_at
    }

```