# requirements.md – Doppelgänger Mobile Game

## 1. Projekt-Übersicht & Vision

**Name:** Doppelgänger  
**Genre:** Skill / Puzzle / Action  
**Plattform:** iOS (min. iOS 15) & Android (min. API 26 / Android 8.0)  
**Engine:** Unity 2023 LTS (Begründung: beste Cross-Platform-Unterstützung, kostenlos bis 200k$/Jahr Revenue, riesige Community, native iOS/Android Export)  
**Budget:** < 5.000 €  
**Team:** 1 Entwickler (Erfahrener Solo-Dev)  
**Sprache:** C#  
**MVP Zeitplan:** 10–14 Wochen

### Vision
Der Spieler ist sein eigener schlimmster Feind. Jede Runde zeichnet das Spiel die Bewegungen des Spielers auf. In der nächsten Runde läuft dieser "Geist" als Gegner. Nach mehreren Runden kämpft der Spieler gegen 5 Versionen seiner selbst gleichzeitig. Das Spiel testet Selbstreflexion, Anpassungsfähigkeit und Skill-Progression.

---

## 2. Tech Stack

| Bereich | Tool / Service | Begründung |
|---|---|---|
| Game Engine | Unity 2023 LTS | Cross-platform, C#, kostenlos |
| Replay Engine | Custom InputRecorder (siehe Sektion 6) | Kein Plugin nötig, leichtgewichtig |
| Backend | Firebase (Firestore + Auth) | Kostenloses Tier reicht für MVP |
| Leaderboards | Firebase Firestore | Einfach, Echtzeit |
| Cloud Save | Firebase Firestore | Spielstand geräteübergreifend |
| Ads | Unity Ads + Google AdMob | Einfache Integration, Rewarded Ads |
| IAP | Unity IAP Plugin | Unified API für iOS & Android |
| Analytics | Unity Analytics (free tier) | Session-Daten, Retention |
| Version Control | Git + GitHub | Standard |
| CI/CD | GitHub Actions + Fastlane | Automatischer Build |

---

## 3. Feature-Liste

### MVP (Phase 1 – Wochen 1–10)
- [ ] Core Game Loop (Bewegung, Kollision, Ziel erreichen)
- [ ] Input Recording System (Replay Engine)
- [ ] Ghost Playback System (1 Geist)
- [ ] 10 handdesignte Level
- [ ] Runden-System (bis zu 5 Geister gleichzeitig)
- [ ] Game Over & Retry Flow
- [ ] Einfaches Progression System (Level-Unlock)
- [ ] Lokale Bestzeiten (Highscore)
- [ ] Grundlegende UI (Hauptmenü, Pause, Game Over Screen)
- [ ] Basic SFX & Musik
- [ ] iOS & Android Build

### Full Version (Phase 2 – Wochen 11–20)
- [ ] Online Leaderboard (Firebase)
- [ ] Cloud Save / Geräte-Sync
- [ ] Daily Challenge (täglich ein neues Level)
- [ ] Ghost Export / Import (Freunde als Gegner herausfordern)
- [ ] 30+ Level (3 Welten)
- [ ] Charakter-Skins (kosmetisch, IAP)
- [ ] Rewarded Ads (extra Retry, Hint)
- [ ] Ranked Mode (Seasonal)
- [ ] Social Share (Screenshot + GIF des Geister-Kampfs)
- [ ] Haptic Feedback
- [ ] Barrierefreiheit (Farbenblind-Modus)

---

## 4. Game Mechanics Spezifikation

### 4.1 Core Loop
```
START RUNDE
  → Spieler bewegt sich durch Level
  → Alle Inputs werden mit Timestamp gespeichert
  → Spieler erreicht Ziel ODER läuft Zeit ab
END RUNDE

NÄCHSTE RUNDE
  → Gespeicherte Inputs der letzten Runde = neuer Geist
  → Geist spielt exakt die aufgezeichneten Bewegungen ab
  → Neuer Geist + alle alten Geister sind jetzt aktiv
  → Kollision mit Geist = Game Over
  → Spieler muss Ziel erreichen ohne Geist zu berühren
```

### 4.2 Input Recording
- Jeder Frame: Position (x, y), Rotation, Action (Jump, etc.) + Timestamp in ms
- Max. Recording-Länge pro Runde: 60 Sekunden
- Geister werden im RAM gehalten (kein Disk-Write während Gameplay)
- Max. 5 Geister gleichzeitig aktiv (Performance-Limit Mobile)

### 4.3 Ghost Playback
- Geist interpoliert zwischen gespeicherten Frames (Linear Interpolation)
- Geist-Transparenz: 60% Alpha
- Geist-Farbe: unterschiedliche Farben pro Geist-Generation (Geist 1 = Blau, 2 = Rot, 3 = Grün, etc.)
- Geist-Kollisions-Hitbox: 80% der Original-Hitbox (faire Kollision)

### 4.4 Level Design Regeln
- Jedes Level hat genau 1 Startpunkt und 1 Ziel
- Lösungsweg muss ohne Geist in unter 20 Sekunden erreichbar sein
- Mit 5 Geistern muss das Level theoretisch noch lösbar sein
- Schwierigkeitsgrade: Easy (1–3 Geister) / Medium (2–4) / Hard (3–5)
- Level-Breite: optimal für Hochformat (Portrait Mode)

### 4.5 Runden-System
| Runde | Aktive Geister | Zeit-Limit |
|---|---|---|
| 1 | 0 (freies Erkunden) | 60s |
| 2 | 1 | 45s |
| 3 | 2 | 40s |
| 4 | 3 | 35s |
| 5 | 4 | 30s |
| 6+ | 5 (max) | 25s |

---

## 5. Technische Architektur

### 5.1 Verzeichnisstruktur
```
Assets/
├── Scripts/
│   ├── Core/
│   │   ├── GameManager.cs
│   │   ├── LevelManager.cs
│   │   └── RoundManager.cs
│   ├── Player/
│   │   ├── PlayerController.cs
│   │   ├── PlayerInput.cs
│   │   └── PlayerCollision.cs
│   ├── Ghost/
│   │   ├── InputRecorder.cs
│   │   ├── GhostPlayback.cs
│   │   ├── GhostData.cs
│   │   └── GhostManager.cs
│   ├── UI/
│   │   ├── MainMenuUI.cs
│   │   ├── GameUI.cs
│   │   ├── GameOverUI.cs
│   │   └── LevelSelectUI.cs
│   ├── Services/
│   │   ├── FirebaseService.cs
│   │   ├── LeaderboardService.cs
│   │   ├── SaveService.cs
│   │   └── AdService.cs
│   └── Utils/
│       ├── Constants.cs
│       └── Extensions.cs
├── Prefabs/
│   ├── Player/
│   ├── Ghost/
│   └── UI/
├── Scenes/
│   ├── MainMenu.unity
│   ├── LevelSelect.unity
│   └── Game.unity (alle Level als Additive Scenes)
├── Levels/
│   └── Level_001 bis Level_030
└── Resources/
    ├── Audio/
    ├── Sprites/
    └── Materials/
```

### 5.2 Datenstrukturen

```csharp
// Einzelner aufgezeichneter Frame
[Serializable]
public struct InputFrame
{
    public float timestamp;      // Zeit in ms seit Runden-Start
    public Vector2 position;     // Weltposition
    public float rotation;       // Rotation in Grad
    public bool isJumping;       // Aktion: Sprung
    public bool isAction;        // Aktion: Special (Level-spezifisch)
}

// Komplette Aufzeichnung einer Runde
[Serializable]
public class GhostData
{
    public int roundNumber;
    public string levelId;
    public List<InputFrame> frames;
    public float totalTime;
}

// Spielstand (Cloud Save)
[Serializable]
public class PlayerSaveData
{
    public string playerId;
    public int highestLevelUnlocked;
    public Dictionary<string, float> levelBestTimes;
    public List<string> unlockedSkins;
    public int totalCoins;
    public DateTime lastDailyChallenge;
}

// Leaderboard-Eintrag
[Serializable]
public class LeaderboardEntry
{
    public string playerId;
    public string displayName;
    public string levelId;
    public float bestTime;
    public int ghostCount;  // mit wie vielen Geistern geschafft
    public Timestamp createdAt;
}
```

### 5.3 Game State Machine
```
STATES: MainMenu → LevelSelect → RoundStart → Playing → RoundEnd → GameOver / LevelComplete
```

---

## 6. Replay Engine – Detailspezifikation

```csharp
// InputRecorder.cs – Läuft während Spieler spielt
public class InputRecorder : MonoBehaviour
{
    private List<InputFrame> _frames = new();
    private float _startTime;
    private bool _isRecording;

    public void StartRecording()
    {
        _frames.Clear();
        _startTime = Time.time;
        _isRecording = true;
    }

    public GhostData StopRecording(string levelId, int round)
    {
        _isRecording = false;
        return new GhostData { 
            frames = _frames, 
            levelId = levelId, 
            roundNumber = round,
            totalTime = Time.time - _startTime
        };
    }

    void FixedUpdate()
    {
        if (!_isRecording) return;
        _frames.Add(new InputFrame {
            timestamp = Time.time - _startTime,
            position = transform.position,
            rotation = transform.eulerAngles.z,
            isJumping = /* aktueller Jump-Status */,
        });
    }
}

// GhostPlayback.cs – Spielt aufgezeichnete Daten ab
public class GhostPlayback : MonoBehaviour
{
    private GhostData _data;
    private int _frameIndex;
    private float _startTime;

    public void Initialize(GhostData data, Color ghostColor)
    {
        _data = data;
        GetComponent<SpriteRenderer>().color = 
            new Color(ghostColor.r, ghostColor.g, ghostColor.b, 0.6f);
        _startTime = Time.time;
    }

    void FixedUpdate()
    {
        float elapsed = Time.time - _startTime;
        while (_frameIndex < _data.frames.Count - 1 &&
               _data.frames[_frameIndex + 1].timestamp <= elapsed)
            _frameIndex++;

        if (_frameIndex >= _data.frames.Count - 1) return;

        // Interpolation zwischen Frames
        var a = _data.frames[_frameIndex];
        var b = _data.frames[_frameIndex + 1];
        float t = (elapsed - a.timestamp) / (b.timestamp - a.timestamp);
        transform.position = Vector2.Lerp(a.position, b.position, t);
        transform.rotation = Quaternion.Lerp(
            Quaternion.Euler(0,0,a.rotation), 
            Quaternion.Euler(0,0,b.rotation), t);
    }
}
```

---

## 7. UI/UX – Screen-Liste

| Screen | Beschreibung |
|---|---|
| Splash Screen | Logo + Ladebalken |
| Main Menu | Play, Settings, Leaderboard, Shop |
| Level Select | Grid-Ansicht, Lock/Unlock, Best-Zeit |
| Pre-Round Screen | "Runde X – Geister: Y" Anzeige |
| Game HUD | Timer, Runden-Anzeige, Geister-Counter, Pause-Button |
| Pause Menu | Resume, Restart, Quit |
| Round Complete | Statistik, "Weiter zu Runde X+1" |
| Game Over | "Du wurdest von dir selbst besiegt", Share, Retry |
| Level Complete | Sterne, Best-Zeit, nächstes Level |
| Leaderboard | Global / Freunde Filter, eigene Position |
| Shop | Skins, Coins, Ad-Button |
| Settings | Sound, Musik, Vibration, Datenschutz |
| Daily Challenge | Countdown, Special Level |

---

## 8. Performance Requirements

- **Target FPS:** 60fps auf iPhone 11 / Samsung Galaxy S10 und neuer
- **Minimum FPS:** 30fps auf iPhone 8 / Android mit 3GB RAM
- **Ladezeit Level:** < 1.5 Sekunden
- **Memory Budget:** < 300MB RAM gesamt
- **APK/IPA Size:** < 100MB (ohne OBB)
- **Max. Geister gleichzeitig:** 5 (danach Perf-Test erforderlich)
- **Input Lag:** < 16ms (1 Frame bei 60fps)
- **Frame-Recording Rate:** FixedUpdate (50Hz = alle 20ms ein Frame)

---

## 9. Monetarisierungsstrategie

### Modell: Free-to-Play + Cosmetics + Ads (kein Pay-to-Win)

**Rewarded Ads (Unity Ads)**
- 1 extra Retry nach Game Over
- Geist-Analyse (Heatmap der eigenen Bewegung)
- Daily Coins verdoppeln

**In-App Purchases (Unity IAP)**
| Produkt | Preis | Typ |
|---|---|---|
| Starter Pack (Skin + 500 Coins) | 1,99 € | One-Time |
| Skin Pack 1 | 2,99 € | One-Time |
| Skin Pack 2 | 2,99 € | One-Time |
| No Ads Forever | 3,99 € | One-Time |
| Season Pass | 4,99 € | Subscription (monatlich) |

**Coins (Soft Currency)**
- Verdient durch: Daily Login, Level-Completion, Rewarded Ads
- Ausgegeben für: kosmetische Items (nicht Gameplay-Vorteile)

---

## 10. Firebase-Struktur (Firestore)

```
/users/{userId}
  - displayName: string
  - createdAt: timestamp
  - lastLogin: timestamp
  - saveData: PlayerSaveData (JSON)

/leaderboards/{levelId}/entries/{entryId}
  - playerId: string
  - displayName: string
  - bestTime: float
  - ghostCount: int
  - createdAt: timestamp

/daily_challenges/{date}
  - levelId: string
  - seed: int
  - specialRule: string

/ghost_shares/{shareId}
  - ownerId: string
  - levelId: string
  - ghostData: GhostData (JSON, max 50KB)
  - createdAt: timestamp
  - expiresAt: timestamp (7 Tage)
```

---

## 11. Testing Requirements

- [ ] Unit Tests für InputRecorder (Aufzeichnung korrekt?)
- [ ] Unit Tests für GhostPlayback (Interpolation korrekt?)
- [ ] Integration Test: 5 Geister gleichzeitig ohne Performance-Einbruch
- [ ] Device Tests: iPhone 8, iPhone 14, Samsung S10, Pixel 6
- [ ] Playtest: Onboarding mit 3 externen Personen (nie das Spiel gesehen)
- [ ] Firebase Security Rules getestet (kein fremder User kann fremde Daten schreiben)
- [ ] IAP Test mit Sandbox-Accounts (iOS & Android)
- [ ] Ads Test mit Test-IDs vor Release
- [ ] Offline-Mode Test (kein Internet vorhanden)

---

## 12. Deployment & Publishing Checklist

### Vor dem Launch
- [ ] App Store Connect Account (99$/Jahr Apple)
- [ ] Google Play Console Account (25$ einmalig)
- [ ] Privacy Policy erstellt und gehostet (Pflicht für beide Stores)
- [ ] Firebase Remote Config für A/B Tests eingerichtet
- [ ] Analytics Events definiert (Level Start, Level Complete, Round Fail, Ad Watched, IAP)
- [ ] App Icons (alle Größen generiert mit makeappicon.com)
- [ ] Screenshots für alle Gerätegrößen
- [ ] App Store Beschreibung (DE + EN)
- [ ] Keyword-Recherche für ASO (AppFollow, Sensor Tower Free Tier)

### ASO Keywords (Vorschlag)
`ghost game`, `play against yourself`, `skill game`, `reflex`, `doppelganger game`, `mirror game`, `shadow game`, `gegen dich selbst`, `puzzle action`

### Soft Launch Strategie
1. Woche 1–2: TestFlight (iOS) + Google Play Internal Test
2. Woche 3–4: Closed Beta (100 User, Reddit r/indiegaming, Discord)
3. Woche 5: Soft Launch in kleinem Markt (z.B. Österreich, Schweiz)
4. Woche 6+: Globaler Launch nach Feedback-Integration

### Viral-Loop
- Nach Level-Complete: "Teile dein Geist-Duell" → automatisch generiertes GIF/Video der letzten Runde
- Deep-Link: Freund kann exakt den gleichen Geist herunterladen und gegen ihn spielen
- "Ich habe mich selbst 5x besiegt" → Social Proof Hook

---

## 13. Entwicklungs-Meilensteine

| Woche | Ziel |
|---|---|
| 1–2 | Projektsetup, Player Controller, Kamera |
| 3–4 | Input Recorder + Ghost Playback (1 Geist) |
| 5 | Multi-Ghost System (bis 5 Geister) |
| 6–7 | Level Design (10 Level) + Level Manager |
| 8 | UI komplett (alle Screens) |
| 9 | Firebase Integration (Auth, Save, Leaderboard) |
| 10 | Ads + IAP Integration |
| 11 | Bugfixing + Performance Optimierung |
| 12 | Beta Testing + Feedback |
| 13–14 | Store Submission + Launch |

---

## 14. Wichtige Hinweise für Claude Code

- Immer `FixedUpdate()` für Physics und Recording verwenden (nicht `Update()`)
- GhostData niemals direkt serialisieren in PlayerPrefs – Firebase oder JSON-File verwenden
- Alle Magic Numbers in `Constants.cs` auslagern
- InputRecorder und GhostPlayback strikt trennen (Single Responsibility)
- Firebase calls immer `async/await` mit Try-Catch (mobile Verbindung unzuverlässig)
- Für iOS: `Application.internetReachability` vor Firebase-Calls prüfen
- Unity IAP: Immer Receipt Validation serverseitig (Firebase Function) – verhindert Betrug
- Geister-Kollision mit `Physics2D.IgnoreCollision()` zwischen Geistern regeln (Geister sollen nicht miteinander kollidieren, nur mit Spieler)