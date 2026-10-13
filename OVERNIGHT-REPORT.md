# ARSMEDICA2 — raport zmian

## Zmieniono
- Początek strony prowadzi przez pięć zadań: godziny, lekarze, laboratorium, szczepienia, informacje. Czerwony panel pokazuje dzisiejszy plan POZ i telefon rejestracji; skróty są dostępne bez otwierania menu.
- Zachowano jasną strukturę tej wersji, znak „A” i dwa oryginalne zdjęcia. Zamiast siatek kart: harmonogramy, rozwijane grafiki i spokojne sekcje. Czerwień #b3141f pochodzi z istniejącego huba ARSMEDICA; zieleń #48685a wspiera informacje kliniczne.
- Dane w src/data/clinic.ts porównano z lokalnym audytem. Telefon dietetyka poprawiono z 722 398 007 na 791 755 792; nazwisko Julia Dobosz przyjęto z dedykowanej strony „O nas”, z widoczną informacją o konflikcie.
- Dodano lokalne PDF-y praw pacjenta oraz zachowano oba komunikaty o naruszeniu danych i źródłową klauzulę RODO. E-recepta jest opisana jako podgląd bez zbierania danych.
- Usunięto ładowanie Google Fonts, osadzoną mapę i przełącznik kolorów. Dodano noindex/nofollow, blokadę indeksowania w robots.txt, widoczny fokus, pomijanie nawigacji i obsługę ograniczonego ruchu. Podstawowy tekst ma co najmniej 18 px.

## „do potwierdzenia” — widoczne na stronie
- **Godziny i personel:** 8:00 kontra 7:30 dla POZ i gabinetu zabiegowego; brak osobnych godzin rejestracji; aktualność grafików, interpretacja piątków parzystych/nieparzystych; brak grafiku pielęgniarek i położnej.
- **Specjaliści:** Julia Dobosz kontra Wiktoria Szczęsna; czwartek kontra piątek u chirurga naczyniowego; dwa numery rejestracji masażu; brakujące godziny części specjalistów.
- **Laboratorium:** lista badań i ceny nie są opublikowane; zakres NFZ/skierowania, przygotowanie do konkretnego badania, sposób odbioru i terminy wyników po weekendach/świętach wymagają ustalenia.
- **Szczepienia:** kalendarz 2026 w treści kontra 2025 w tytule; dokładny zakres szczepienia skojarzonego, dostępność, kwalifikacja, wiek pacjenta i finansowanie.
- **Informacje ogólne:** zasady zapisów do POZ, dokumenty do wizyty, dojazd/parking/dostępność wejścia, aktualność PDF-u „Poza kolejnością” z 2019 r., kompletność RODO, brakujące procedury pacjenta i oznaczenia projektu grantowego.

## Weryfikacja i pozostałe ograniczenia
- `npm run build`: **PASS**, kod wyjścia 0. Narzędzia zgłaszają ostrzeżenia o konfiguracji bundlera i dyrektywach zależności; nie są to błędy kompilacji.
- `tsc --noEmit` i `git diff --check`: **PASS**.
- Renderowanie SSR bez serwera: wszystkie 5 stron zwraca 200, nieistniejąca strona 404; wszystkie mają noindex/nofollow. **0 błędów konsoli SSR**.
- Sprawdzono **113 lokalnych linków i kotwic**, obrazy, arkusze stylów, skrypty i PDF-y: bez brakujących celów. Jedyny zewnętrzny link otwierany przez pacjenta prowadzi do wyszukiwania adresu w OpenStreetMap; nie potwierdzono odpowiedzi zewnętrznego serwisu.
- Sumy SHA-256 obu zdjęć odpowiadają wykazowi hub/image-sources.json. Główne pary kolorów mają kontrast 5,49:1 lub wyższy.
- **Niewykonane:** wizualna kontrola 360/390 px i kontrola konsoli przeglądarki. Sandbox blokuje lokalny serwer (EPERM), a polityka dostępu odrzuca narzędzia przeglądarki. Z tego samego powodu dodatkowy `build:pages` zatrzymuje się na uruchamianiu serwera do prerenderingu; wymagany `npm run build` przechodzi.
- Aktualnych faktów brakujących w audycie nie uzupełniano domysłami. Podgląd nie realizuje zamówień e-recept ani zapisów online. Nie wykonano commita ani pusha; istniejący nieśledzony package-lock.json pozostawiono bez edycji.
