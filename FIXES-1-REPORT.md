# Centrum — poprawki, runda 1

- Nawigacja: wypełnione pola z obramowaniem, minimum 48 px na telefonie; zawijanie na węższych ekranach.
- Czerwony panel: jedno krótkie zdanie „Rozbieżne godziny POZ.” i mała etykieta „do potwierdzenia”. Pełna dotychczasowa uwaga pozostaje w danych, pozostałych miejscach strony i atrybucie title etykiety.
- Telefon rejestracji: pełna szerokość, minimum 56 px, czerwony tekst na białym tle, bezpośrednio pod godzinami; zachowany tel:+48625802252.
- Fakty: nie dodano nowych. Zachowano oznaczenie rozbieżnych godzin POZ (8:00–18:00 kontra 7:30–18:00); brak osobnych godzin rejestracji nadal opisany w pełnej uwadze. Pozostałe oznaczenia „do potwierdzenia” bez zmian.
- Weryfikacja: npm run build zakończony kodem 0 po ostatniej zmianie; git diff --check bez błędów. Build zgłasza ostrzeżenia bundlera i zależności.

Pozostało: odświeżenie Arsmedica/centrum/ jest osobnym zadaniem skryptu run2.sh. Nie wykonano kontroli wizualnej w przeglądarce. Przełącznik wyglądu był już niepodłączony w zastanym źródle; nie zmieniano go w ramach trzech wskazanych poprawek. Nie wykonano commita ani pusha; istniejący package-lock.json pozostawiono bez zmian.
